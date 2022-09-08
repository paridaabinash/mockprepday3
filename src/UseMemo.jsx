import React,{useMemo, useState,useCallback} from 'react';



export default function UseMemo(){
    const [val,setVal] = useState(0);
    const [item,setItem] =useState(1);

    const memoHook = useMemo(function countMemo(){
        console.log("memo hook");
        return val+5;
    },[item]);

    const callbackHook = useCallback(function countMemo(){
        console.log("callback");
        return val;
    },[val]);

    return(
        <>
         <h1>5- What is UseMemo Hook ?(Implementation)</h1>
         <p>The React useMemo Hook returns a memoized value.Think of memoization as caching a value so that it does not need to be recalculated.The useMemo Hook only runs when one of its dependencies update.This can improve performance. The useMemo and useCallback Hooks are similar. The main difference is that useMemo returns a memoized value and useCallback returns a memoized function.</p>

         <h2>Value: {val}</h2>
         <h2>Items: {item} </h2>
         <h3>{memoHook}</h3>
         <h3>{callbackHook}</h3>
         <button type="button" class="btn btn-warning" onClick={()=>setVal(val+1)}>Click Me</button> &nbsp;
         <button type="button" class="btn btn-info" onClick={()=>setItem(item*2)}>Click Me</button>
        </>
    )
}
