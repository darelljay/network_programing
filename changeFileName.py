import os

def replace_text_in_file():
    while(True):
        try:
            path = input("변경 파일에 상위 폴더명 입력: ") 
            folderPath = 'c:/Users/User/Desktop/네트워크 프로그래밍/'+path
            files = os.listdir(path)
            for file in files:
                if file.find("학번,이름") == 0:
                    oldFile = folderPath + "/" + file
                    print(oldFile)
                    newFile = folderPath+"/"+file.replace("학번,이름","20312,다렐제이슨");
                    print(newFile)
                    os.rename(oldFile,newFile);
                    break;
        except Exception as e :
            print(e);
replace_text_in_file()