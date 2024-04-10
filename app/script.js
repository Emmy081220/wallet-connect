import { coins } from "./data.js"
const coinContainer = document.querySelector(".coin-registry")

document.addEventListener("DOMContentLoaded", () => {
    coinContainer.innerHTML = ""
    coins.forEach(coin => {
        const coinDiv = document.createElement("div")
        coinDiv.innerHTML = `
             <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal71" class="btn coin">
                            <img class="coin-img" src="${coin.image}" style="border-radius:100% object-fit:cover;" alt="" />
                            <h4>${coin.name}</h4>
                        </button>
        `
        coinDiv.addEventListener("click", () => {
            const modal = document.querySelector(".modal")
            modal.innerHTML = `
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">${coin.name}</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                close
                            </button>
                        </div>
                        <div class="modal-body">
                            <img src="${coin.image}" alt="" />
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            `
        })
        coinContainer.appendChild(coinDiv)
    })
})