import React from 'react'
import { useParams } from 'react-router-dom'
import InitialVariable from "../../store/InitialVariable";
import DataClbinfo from './DataClbinfo';
function Clbinfo({ match }: any) {
    const initialVar = InitialVariable();

    const { id } = useParams();

    return (
        <div>Clbinfo = {id}</div>
    )
}

export default Clbinfo