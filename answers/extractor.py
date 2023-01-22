import json
import re

CLEANR = re.compile('<.*?>')

def cleanhtml(raw_html):
  cleantext = re.sub(CLEANR, '', raw_html)
  return cleantext


question = None
answers = []
answer = ""


with open("output.json", "r") as f:
    data = json.load(f)


with open('load.html', 'r', encoding='utf-8') as f:
    for line in f:
        try:
            if "<h3" in line and question is None: # question
                question = cleanhtml(line.strip('\n'))
            elif "color: #ff0000" in line and question is not None: # answer
                answers.append(cleanhtml(line.strip('\n')))
            elif "<img" in line and "Refer to the exhibit." not in question: # image question - needs manual assignment
                print(f"ATTENTION NEEDED AT: {question}")
                print("image question")
                question = None
                answers = []
                answer = ""
            elif "</ul>" in line and question is not None: # end of question - write to json
                for i in answers:
                    answer += f"- {i}\n"
                data[question] = answer
                question = None
                answers = []
                answer = ""
        except: # something fucked up :P
            print(f"ATTENTION NEEDED")

with open('output.json', 'w') as f:
    f.write(json.dumps(data, indent=4, ensure_ascii=False))
