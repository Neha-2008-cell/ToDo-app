import React from "react";
import Checkbox from "./Checkbox";
export default function Done () {
    return (
        <>
        <div className="flex">
            <Checkbox  checked="checked" />
            <p>Write an article about @xstate/test</p>
        </div>
        </>
    )
}

