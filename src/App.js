import React from "react"
import ShopPlace from "./Shop/ShopPlace"

function App() {
  function showBtnBuy() {
    let btnBuy = document.querySelector(".btnBuy")
    return document.querySelectorAll(".shop__item.active").length > 0
      ? (btnBuy.hidden = false)
      : (btnBuy.hidden = true)
  }

  return <ShopPlace showBtnBuy={showBtnBuy} />
}

export default App
