import * as basicLightbox from 'basiclightbox'

export default function Modal () {
    return(
        <div className="overlay">
            <div className="modal">
                <img src="" alt="" />
            </div>
        </div>
    )
}

// document.querySelector('button.image').onclick = () => {

// 	basicLightbox.create(`
// 		<img width="1400" height="900" src="https://placehold.it/1400x900">
// 	`).show()