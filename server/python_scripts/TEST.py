import sys
import json

def printData():
  dataObj = {'data':[{'pnt':6},{'pnt':21},{'pnt':100}]}
  print(json.dumps(dataObj))

if __name__ == "__main__":
  printData()
  
  # Anything non-zero is considered an error to NodeJS
  sys.exit(0)