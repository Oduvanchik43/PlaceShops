import React from "react"
import ShopItem from "./ShopItem"
import PropTypes from "prop-types"

const classShItem = "shop__item"
const classShBuy = "shop__item buy"

function ShopPlace(showBtnBuy) {
  //func generation number is parametrs
  function getRandomInt(max) {
    return Math.floor(Math.random() * max)
  }

  // search all selector .shop__item.active
  function shopActive() {
    return document.querySelectorAll(".shop__item.active")
  }

  function pushToLocStor(placesSelected) {
    for (let i = 0; i < placesSelected.length; i++) {
      console.log(placesSelected[i].key)
      localStorage.setItem("f", placesSelected[i])

      // if (localStorage.getItem("f").length > 0) {
      //   alert("FFFF")
      // }
    }
  }
  // async function on click btn buy
  async function fetchAsyncPlace(event) {
    try {
      let randNum = await getRandomInt(50)
      if (randNum > 25) {
        console.log("randNum = ", randNum)
        let shActive = await shopActive()
        console.log(shActive)

        pushToLocStor(shActive)
        shActive.forEach((places) => (places.className = classShBuy))
        onLoadStorage()
        showBtnBuy.showBtnBuy()
      } else {
        console.log("randNum = ", randNum)
        alert("Недостаточно средств")
        let shActive = await shopActive()
        shActive.forEach((places) => (places.className = classShItem))
        showBtnBuy.showBtnBuy()
      }
    } catch (e) {
      console.log(e)
    }
  }

  function onLoadStorage() {
    try {
      let p = localStorage.getItem("f")

      console.log(p.valueOf())
    } catch (e) {
      console.error(e)
    }
  }
  return (
    <div className="wrapper">
      <div className="head">
        <h1 className="title">Available seats</h1>
        <button hidden className="btnBuy" onClick={fetchAsyncPlace}>
          Buy
        </button>
      </div>
      <div className="shop__place">
        <ShopItem showBtn={showBtnBuy.showBtnBuy} />
        <ShopItem showBtn={showBtnBuy.showBtnBuy} />
        <ShopItem showBtn={showBtnBuy.showBtnBuy} />

        <ShopItem showBtn={showBtnBuy.showBtnBuy} />
        <ShopItem showBtn={showBtnBuy.showBtnBuy} />
        <ShopItem showBtn={showBtnBuy.showBtnBuy} />

        <ShopItem showBtn={showBtnBuy.showBtnBuy} />
        <ShopItem showBtn={showBtnBuy.showBtnBuy} />
        <ShopItem showBtn={showBtnBuy.showBtnBuy} />
      </div>
    </div>
  )
}

ShopPlace.propTypes = {
  showBtnBuy: PropTypes.func.isRequired,
}

export default ShopPlace
