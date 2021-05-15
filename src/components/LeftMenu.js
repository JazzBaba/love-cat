import { connect } from "react-redux";
import { fetchCategory } from "../actions";
import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { fetchKitten } from "../actions";


function LeftMenu(props) {
    const dispatch = useDispatch();
    const categories = useSelector(state => state.category);
    var displayCategory = categories.map((category) => {
        return (
            <p key={category.id} onClick={() => dispatch(fetchKitten({categoryId:category.id}))}>
                {category.name}
            </p>
        )
    });
    useEffect(() => {
        props.fetchCategory();
    }, [props]);

    return (
        <div>
            <div id="mySidenav" className="sidenav">
                {displayCategory}
            </div>
        </div>
    );
};

export default connect(null, { fetchCategory })(LeftMenu);