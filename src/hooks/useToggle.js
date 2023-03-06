import { useState } from "react";

export default function useToggle(isVisible = false) {
    const [toggle, setToggle] = useState(isVisible)

    function toggleVision() {
        setToggle(prevToggle => !prevToggle)
    }

    return [toggle, toggleVision]
}