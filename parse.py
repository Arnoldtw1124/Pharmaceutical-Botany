import codecs
import json
import re

md_path = r"d:\藥用植物\藥用植物.md"
app_js_path = r"d:\藥用植物\app.js"

with codecs.open(md_path, 'r', 'utf-8') as f:
    lines = f.readlines()

plants = []
current_plant = None

for line in lines:
    stripped = line.strip()
    if not stripped:
        continue
    
    num_leading_spaces = len(line) - len(line.lstrip('\t '))
    
    if num_leading_spaces == 0 and stripped.startswith('*'):
        name = stripped[1:].strip()
        current_plant = {"id": len(plants) + 1, "answer": name, "hint": ""}
        plants.append(current_plant)
    elif num_leading_spaces > 0 and stripped.startswith('*'):
        hint = stripped[1:].strip()
        if current_plant is not None:
            if current_plant["hint"]:
                current_plant["hint"] += "\n" + hint
            else:
                current_plant["hint"] = hint

js_str = "const plantDictionary = [\n"
for p in plants:
    answer_val = json.dumps(p['answer'], ensure_ascii=False)
    hint_val = json.dumps(p['hint'], ensure_ascii=False)
    js_str += f"""    {{
        id: {p['id']},
        answer: {answer_val},
        hint: {hint_val}
    }},\n"""
js_str += "];"

with codecs.open(app_js_path, 'r', 'utf-8') as f:
    app_js = f.read()

# Using lambda m: js_str solves the issue of re.sub interpreting escape sequences natively
app_js = re.sub(r"const plantDictionary = \[.*?\];", lambda m: js_str, app_js, flags=re.DOTALL)

with codecs.open(app_js_path, 'w', 'utf-8') as f:
    f.write(app_js)

print("Fixed SyntaxError in app.js!")
