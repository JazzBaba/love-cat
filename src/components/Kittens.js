
import { useSelector, useDispatch } from "react-redux";
import { fetchKitten } from "../actions";
import { KITTENAPPAND } from "../actions/type";

function Kittens() {
    var dispatch = useDispatch();
    const kittens = useSelector(state => state.kitten);
    var displayKittens = [];
    var messagesEnd


    var scrollToBottom = () => {
        messagesEnd.scrollIntoView({ behavior: "smooth" });
    }

    displayKittens = kittens.data.map((kitten, index) => {
        if (kittens.data.length === index + 1 && kittens.page>0) {
            
        }
        return (
            <img key={index} src={kitten.url} alt={kitten.id} width={200} height={200} />
        )
    });

    return (
        <div>
            <div id="imageContiner" >
                {displayKittens}
            </div>
            <span ref={(el) => { messagesEnd = el; }}></span>
            <div id="mybutton">
                <button onClick={() => {
                    dispatch(fetchKitten({ categoryId: kittens.categoryId, page: kittens.page + 1, type: KITTENAPPAND }))
                    scrollToBottom()
                }
                } className="feedback">More Kitty</button>
            </div>
        </div>
    )
}

export default Kittens;