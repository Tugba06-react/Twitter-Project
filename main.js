//console.log('Bağlantı kontrol')

const placeholder = document.querySelector(".placeholder");
//console.log(placeholder)
const editableInput = document.querySelector(".editable");
//console.log(editableInput)

const tweetButton = document.querySelector(".button");
//console.log(tweetButton)

const counter = document.getElementById("counter");
//console.log(counter)

const readOnly= document.querySelector(".readonly")
//console.log(readOnly)

//Tıklama olayını dinliyoruz
editableInput.addEventListener("click", () => {
//placeholder (span) rengini değiştiriyoruz
  placeholder.style.color = "#98a5b1";
});

//Inputun odağını dışarıya tıklanınca kaldırıyor
editableInput.onblur = () => {
  placeholder.style.color = "#333";
};
//Klavyenin basılma olayını dinliyor
editableInput.onkeypress = (e) => {
  placeholder.style.display = "none";
  //console.log(e.target)
  inputValidate(e.target.innerText);
};
//Klavyeden parmağımızı çektiğimiz anı dinliyor
editableInput.onkeyup = (e) => {
  placeholder.style.display = "none";
  inputValidate(e.target.innerText);
};
 //Yazılan tweetin karakter kontrolu
 console.log(counter);
const inputValidate = (tweet) => {
  //console.log(tweet)
 //dışarıdan gelen input veririsinin uzunluğu
  const tweetLength = tweet.length;
  //console.log(tweetLength)

  const tweetLimit = 5;
  //Kalan karakter limiti
  const currentLimit = tweetLimit - tweetLength;
 //Karakter varmı ?
  if (tweetLength <= 0) {
    //KARAKTER YOKSA
    //placeholder görünür hale getirir
    placeholder.style.display = "block";
    //tweet butnun pasif yapma
    tweetButton.classList.remove("active");
    //sayacın görünürlüğünü ortadan kaldırma
    counter.style.display = "none";
  } else {
    //KARAKTER VARSA

    //Tweet butonunu aktif hale getirme
    tweetButton.classList.add("active");
    //Sayacı görünür yapma
    counter.style.display = "block";
     //sayacın değerine hesaplanan değeri atama
    counter.innerText = currentLimit;
  }

  let newTweet;
  //KARAKTER SINIRI AŞILDI MI ?
  if (tweetLength>tweetLimit) {
    //KARAKTER SINIRI AŞILDIĞI DURUM
     //substr ile başlangıç(tweet limiti) ve bitiş(girilen toplam karakter sayısı) noktası beliryerek taşan karakteri bulma
    //yazının rengini limiti geçince kırmızı yapar.
  let overTweet=tweet.substr(tweetLimit,tweetLength)
  //console.log(overTweet)

  //Taşan karakterleri arka planını kırmızı yapmak için span oluşturma
  let overTweetElement=`<span class='overTweet'>${overTweet}</span>`
  //console.log(overTweetElement)
 //normal karakteri ve taşan karaketleri birlieştirp yeni bir tweet oluuştruma
  newTweet = tweet.substr(0,tweetLimit) + overTweetElement
  //yeni tweet readonly göstereceğimiz için zIndexle görünür yaptık
  readOnly.style.zIndex='1'
  //sayacın sınırı aşan karakterleri kırmızı gösterme
  counter.style.color='red'
    //sınır aşıldıysa buttonu pasif yapma
  tweetButton.classList.remove('active');
    
  }
  else{
    //KARAKTER SINIRININ AŞILMADIĞI DURUM

    //sayacı kendi normal rengi
    counter.style.color='#333'
    //taşma işlemi oluştuğunda görünür yapılan yapıyı görünmez yapma
    readOnly.style.zIndex='-5'
  }
  //oluşan yeni tweeti göstermek için html tarafına göderme
  readOnly.innerHTML=newTweet
};
