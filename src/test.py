from flask import Flask, request, jsonify
from flask_cors import CORS
app = Flask(__name__)
CORS(app)  # 在你的 Flask app 上啟用 CORS
@app.route('/recognize-nail', methods=['GET'])
def recognize_nail():
    # 在這裡編寫指甲辨識的程式碼，可以使用 OpenCV 或其他圖像處理庫
    # 接收圖片
    nail_image = '123'

    # 做一些指甲辨識的處理

    # 返回結果
    return jsonify({'result': nail_image})

if __name__ == '__main__':
    app.run(debug=True)
