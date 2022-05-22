# memory-word
一個可以用來記憶單字的SPA網站
## 緣由
會想做這個網站，主要是因為平常使用單字書背單字，會看到會的單字，及不會的單字，而會將不會的單字另外紀錄到notion中，非常麻煩，導致背單字效率低落。  
  
所以創建一個網站，可以將單字做分類篩選的功能，並且可以重複將不會的單字進行複習，就可以增加背單字這個行為的效率。  
順便用來踩雷vue3的composition api (x

## 網站使用方式
### step 1 進入網站

<a href="https://alvinwang627.github.io/word-memory/" target="_blank">網站連結</a><br>
<img src="https://user-images.githubusercontent.com/93432312/169701120-536ee7cd-4adb-44d5-bce6-5be324edacfe.png" width = "393" height = "700" alt="图片名称" align=center />

### step 2 點擊setting可以對單字進行增刪改
增加的單字會直接進入"我不會"的區塊  <br>
雙擊單字可以對單字進行編輯<br>

 <img src="https://user-images.githubusercontent.com/93432312/169701437-0061d823-b76d-4135-acc9-56730c661de7.png" width = "350" height = "700" alt="图片名称" align=center />  
 
###  step 3 回Home 點擊 start memory 開始測試

<img src="https://user-images.githubusercontent.com/93432312/168539909-15fdf960-7878-435a-980a-ed853f151860.png" width = "350" height = "450" alt="图片名称" align=center />
程式邏輯<br>
1.測試時若對點選按鈕 "我會了" 單字將會被分類到data頁面熟悉區塊<br>
2.測試時若對點選按鈕 "不熟" 單字將會被分類到data頁面不熟區塊<br>
3.測試時若對點選按鈕 "我不會" 單字將會被分類到data頁面不會區塊<br>
4.測試只會出現"不熟"及"我不會"區塊的單字，"我會了"區塊的單字將不會在測試中出現<br>

### step 4 測試結束後會跳回Home頁面，點擊Data，至Data頁面
Data頁面中可以看到測試後的結果，看看還有哪些不會、不熟的單字  
<img src="https://user-images.githubusercontent.com/93432312/169701245-862520c9-51a3-4e40-b8cc-6d3baae8e504.png" width = "350" height = "450" alt="图片名称" align=center />
## 若想要在本地執行

### step1
```sh
git clone https://github.com/AlvinWang627/word-memory.git
```
### step2
```sh
npm install
```
### step3  
```sh
npm run dev
```
