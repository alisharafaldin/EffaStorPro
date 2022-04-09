
console.log("waaaaay");

const body = document.getElementById("body")
const head = document.getElementById("head")

const showItems = document.createElement("div");
const allBuyBtn = document.querySelectorAll(".btn-primary");
const backScreen = document.getElementById("backScreen");
const close = document.getElementById("close");
const formContainer = document.getElementById("form-container");
const itemInfo = document.getElementById("item-info");
const allItemSend = document.getElementsByClassName("all-item-send");
const username = document.getElementById("username");
const phone = document.getElementById("phone");
const regbtn = document.getElementById("regbtn");
const phoneMessage = document.getElementById("phonemessage")
const userMessage = document.getElementById("usermessage")
const contents = document.querySelector(".contents")
const toPage1 = document.getElementById("to-page-1")
const toPage2 = document.getElementById("to-page-2")
const toPage3 = document.getElementById("to-page-3")
const toPage4 = document.getElementById("to-page-4")
const toPage5 = document.getElementById("to-page-5")
const page1 = document.getElementById("page-1")
const page2 = document.getElementById("page-2")
const page3 = document.getElementById("page-3")
const page4 = document.getElementById("page-4")
const page5 = document.getElementById("page-5")

const allTabs = document.querySelector(".alltabs")
const allBtnTab = document.querySelectorAll(".btn-tab")
const parentOfPage = document.querySelector(".parent-of-page")


allBtnTab.forEach((item, index) => {
  item.addEventListener("click", (eo) =>{
    item.classList.add("active-btn")
    console.log(item);
    allTabs.getElementsByClassName("active-btn")[0].classList.remove("active-btn")
    console.log(allTabs);
    parentOfPage.getElementsByClassName("active-card")[0].classList.remove("active-card")
    console.log(parentOfPage);
    parentOfPage.getElementsByClassName("content")[index].classList.add("active-card")
    console.log(parentOfPage);
  })
})

// كتابة عنوان الموقع آلياً عن طريق دالة

window.onscroll = function () {
  // console.log(this.screenY);
  if (this.scrollY >= 10) {
    head.classList.add("head-mobile")
  }else{
    head.classList.remove("head-mobile")
  }
}

// allBtn.addEventListener("click", (eo) => {
//   contents.scrollY = 100;
// })

// كتابة عنوان الموقع آلياً عن طريق دالة
const subTitle = document.getElementById("sub-title")
let counter = 1
const autowriting = () => {
    const titleName ="متجر عفة استور لمستلزمات المرأة العصرية"
    subTitle.innerText = titleName.slice(0,counter);
    counter++
    if (counter > titleName.length) {
        // counter = 1 // في حالة تكارار الكتابة
        clearInterval(stopAutoFun) // لإيقاف الدالة بعد إكمال الكتابة
    } 
}
const stopAutoFun = setInterval(autowriting, 100)



// التنقل بين الصفحات
// toPage1.addEventListener("click", (eo) => {
//   page1.style.display = "block";
//   page1.style.opacity = 1;
//   page1.style.scrollY = 100;
//   backgroundColor = "var(--main-Color)"
//   page2.style.display = "none";
//   page3.style.display = "none";
//   page4.style.display = "none";
//   page5.style.display = "none";
// })
// toPage2.addEventListener("click", (eo) => {
//   page1.style.display = "none";
//   page2.style.display = "block";
//   page2.style.opacity = 1;
//   page3.style.display = "none";
//   page4.style.display = "none";
//   page5.style.display = "none";
// })
// toPage3.addEventListener("click", (eo) => {
//   page1.style.display = "none";
//   page2.style.display = "none";
//   page3.style.display = "block";
//   page3.style.opacity = 1;
//   page4.style.display = "none";
//   page5.style.display = "none";
// })
// toPage4.addEventListener("click", (eo) => {
//   page1.style.display = "none";
//   page2.style.display = "none";
//   page3.style.display = "none";
//   page4.style.display = "block";
//   page4.style.opacity = 1;
//   page5.style.display = "none";
// })
// toPage5.addEventListener("click", (eo) => {
//   page1.style.display = "none";
//   page2.style.display = "none";
//   page3.style.display = "none";
//   page4.style.display = "none";
//   page5.style.display = "block";
//   page5.style.opacity = 1;
// })


const updateTotalPrice = () => {
  //تحديث السعر
  const allProductsInBlackScreen = document.querySelectorAll(".item-container");
  let total = 0;
  allProductsInBlackScreen.forEach((item) => {
    const price = item
      .getElementsByClassName("price")[0]
      .innerText.replace("ج", "");
    const quantity = item.getElementsByClassName("input-quantity")[0].value;
    total += price * quantity;
  });
  totalPrice.innerText = `${total} جنيه`;
};

allBuyBtn.forEach((item) => {
  //الأحداث عند ضغط طلب شراء
  item.addEventListener("click", (eo) => {
    {
      //تنسيق ضغط طلب شراء
      item.setAttribute("disabled", "");
      item.classList.remove("btn-primary");
      item.classList.add("btn-success");
      item.innerHTML = "&#10004; Done";
      item.style.backgroundColor = "var(--main-Color)"
      // item.classList.add("icon-check-circle")
    }

    {
      //إنشاء نصر مبروك وتحريكه وحذفه
      const popUp = document.createElement("div");
      body.append(popUp);
      popUp.classList.add("done-pop-up");
      popUp.innerHTML = "&#128525; تم الطلب بنجاح";

      setTimeout(() => {
        popUp.style.transform = "translateX(-50vw)";
      }, 500);

      setTimeout(() => {
        popUp.remove();
      }, 1500);
    }

    {
      // إنشاء زر عرض المشتريات
      body.append(showItems);
      showItems.classList.add("show-items");
      showItems.innerHTML = "عرض طلبات الشراء";
      showItems.style.backgroundColor = "var(--main-Color)"

    }

    {//إضافة منتج في العربة
      const card = item.parentElement.parentElement.parentElement;
      const imgSrc = card
        .getElementsByClassName("card-img-top")[0]
        .getAttribute("src");
      const itemName = card.getElementsByClassName("card-title")[0].innerText;
      const itemPrice = card.getElementsByClassName("price")[0].innerText;
      const addedProduct = `
            <div class="item-container">
                <div class="img-title-parent">
                    <img src="${imgSrc}" alt="">
                    <div class="product-name">${itemName}</div>
                </div>
                <div class="quantity">
                    <input type="number" min="1" value="1" id="input-quantity" class="input-quantity" >
                    <p>الكمية</p>
                </div>
                <div class="price">
                    ${itemPrice}
                </div>
                <div class="btn btn-secondary btn-delete">
                    حذف
                </div>
            </div>
        `;
      allProduct.innerHTML += addedProduct;
    }

    updateTotalPrice();
  });
});

showItems.addEventListener("click", (eo) => {
  // عند الضغط على عرض طلبات الشراء
  backScreen.style.transform = "translateX(0)";
});

close.addEventListener("click", (eo) => {
  // عند الضغط على إغلاق شاشة منتجات
  backScreen.style.transform = "translateX(-110vw)";
});

backScreen.addEventListener("change", (eo) => {
  // عند حدوث أي تغيير في شاشة طلبات الشراء
  updateTotalPrice();
});

backScreen.addEventListener("click", (eo) => {
  // حذف منتج
  if (eo.target.classList.contains("btn-delete")) {
    eo.target.parentElement.remove();
    updateTotalPrice();
    //
    const nameOfDeletedProduct =
      eo.target.parentElement.getElementsByClassName("product-name")[0]
        .innerText;

    const allCardsInGallary = document.querySelectorAll(".card");
    allCardsInGallary.forEach((item) => {
      const nameOfProductInGalary =
        item.getElementsByClassName("card-title")[0].innerText;
      if (nameOfDeletedProduct == nameOfProductInGalary) {
        const doneButton = item.getElementsByClassName("btn-success")[0];
        doneButton.removeAttribute("disabled");
        doneButton.classList.remove("btn-success");
        doneButton.classList.add("btn-primary");
        doneButton.innerText = "طلب شراء";

        console.log(doneButton);
      }
    });
  }
});

// createAccount تأكيد معلومات الإرسال
function activReg() {

  if (phone.value != "" && username.value != '') {
    console.log("aaaaaaa");
    regbtn.removeAttribute("disabled");
    regbtn.style.backgroundColor = "#04aa6d";
    regbtn.style.display = "block"
    
  } else {
    regbtn.setAttribute("disabled", "disabled");
    regbtn.style.backgroundColor = "crimson";
   
  }

  if (username.value != '') {
    userMessage.style.color = "#fff"
    userMessage.style.color = "#fff"
  } else {
    userMessage.style.color = "crimson"
    userMessage.style.color = "crimson"
  }

  if (phone.value != "") {
    phoneMessage.style.color = "#fff"
    phoneMessage.style.color = "#fff"
  } else {
    phoneMessage.style.color = "crimson"
    phoneMessage.style.color = "crimson"
  }
}

SubmitPurchaseRequisition.addEventListener("click", (eo) => {
  console.log("doneeee");
  const allSend = document.querySelectorAll(".item-container");
  let itemNum = 0;
  let totalPriceItemSend = 0;
  allSend.forEach((item) => {
    console.log(item);
    const itemSend = item.getElementsByClassName("product-name")[0].innerText;
    const countSend = item.getElementsByClassName("input-quantity")[0].value;
    const priceSend = item.getElementsByClassName("price")[0].innerText;
    const totalPriceAllItem = countSend * priceSend.replace("ج", "");
    const allItemSend =
      "إسم القطعة: " +
      itemSend +
      " / الكمية: " +
      countSend +
      " / سعر القطعة: " +
      priceSend +
      " / الإجمالي: " +
      totalPriceAllItem;
    console.log(allItemSend);
    itemNum++;
    const addAllItemSend = `
             <input class="send all-item-send" type="text" name="item-${itemNum}" value="${allItemSend}">
        `;
        itemInfo.innerHTML += addAllItemSend;
        
        totalPriceItemSend += totalPriceAllItem;
    console.log(totalPriceItemSend);
  });

  parentForm.style.display = "block";
  setTimeout(() => {
    form.style.transform = "scale(1)";
  }, 100);
});

// const closeSend = document.getElementById("close-send"