import React from "react"
import PropTypes from "prop-types"
const shop = "shop__item"
function ShopItem(showBtn) {
  function changeItem(e) {
    if (e.target.className !== "shop__item buy") {
      //add class active
      e.currentTarget.classList.toggle("active")

      //function show btnBuy
      showBtn.showBtn()

      //active element of HTML
      let timerDoc = e.target

      //time is timer in seconds
      let time = 10

      //function update timer is setInterval every one seconds
      let timer = setInterval(updateTimer, 1000)
      function updateTimer() {
        let minutes = Math.floor(time / 60)
        let seconds = time % 60

        //clear interval if time is up, else continue timers
        if (timerDoc.className !== "shop__item active") {
          timerDoc.innerHTML = " "
          return clearInterval(timer)
        }
        if (time <= 0) {
          clearInterval(timer)
          timerDoc.innerHTML = "Time is up!"
          timerDoc.className = shop
          //function show btnBuy
          showBtn.showBtn()
          setTimeout(() => (timerDoc.innerHTML = " "), 2000)
        } else {
          minutes = minutes < 10 ? "0" + minutes : minutes
          seconds = seconds < 10 ? "0" + seconds : seconds
          timerDoc.innerHTML = `${minutes}` + ":" + `${seconds}`
          time--
        }
      }
    } else {
      alert("Это место было куплено ранее!")
    }
  }

  return <div className={shop} onClick={changeItem}></div>
}

ShopItem.propTypes = {
  showBtn: PropTypes.func.isRequired,
}

export default ShopItem
