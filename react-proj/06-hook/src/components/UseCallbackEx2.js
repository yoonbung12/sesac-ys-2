import { useCallback, useEffect, useState } from "react"
export default function UseCallbackEx2({postId}) {
    const [post, setPost] = useState();
    const [text, setText] = useState("");
    // https://jsonplaceholder.typicode.com/posts/
    const fetchData = useCallback(async() => {
        console.log("aaaaa")
        const res = await fetch(
            `https://jsonplaceholder.typicode.com/posts/${postId}`
        );

        const post = await res.json();
            setPost(post);

    },[postId]);

    useEffect(() => {
        fetchData();
    },[fetchData]); // 의존성 코드를 잘 적어야 문제가 해결된다.


    return (
        <>
            <h3>useCallback 공부</h3>
            <div>조회한 포스트 id: {postId}</div>

            {post && (
                <div>
                    <div>id: {post.id}</div> 
                    <div>body: {post.body}</div> 
                    <div>title: {post.title}</div> 
                </div>

            )
            
            }
        </>
    )
}

// useMemo Vs useCallback
// useMemo : 특정 값을 기억하여, 불필요한 연산을 방지한다.
// useCallback : 특정 함수를 기억하여, 불필요한 재선언을 방지
