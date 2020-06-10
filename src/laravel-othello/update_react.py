import os

project_root = os.getcwd()
os.chdir(os.path.join(project_root, "resources", "react"))
os.system(os.path.join("node_modules", ".bin", "webpack"))
os.chdir(project_root)