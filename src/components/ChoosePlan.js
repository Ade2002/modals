import React from 'react';
import Backdrop from './HOC'
import Spanning from '../layouts/Spanning';
import ContinueBtn from "../layouts/ContinueBtn";
import CustomSelect from '../layouts/CustomSelect';
function ChoosePlan(props) {
    return (
        <>
            <Spanning heading='Choose a Plan' />
            <form action="post">
                <CustomSelect />
                <ContinueBtn to='/' />
            </form>
        </>
    )
}
export default Backdrop(ChoosePlan);