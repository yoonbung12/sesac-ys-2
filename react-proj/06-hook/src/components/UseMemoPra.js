import { useMemo, useState } from "react";

export default function UseMemoPra() {
    const [text, setText] = useState('');
    const [keyword, setKeyword] = useState('');

    const keywordCount = useMemo(() => {
        if (text.trim() && keyword.trim()) {
            const words = text.split(' ');
            return words.filter((w) => w.includes(keyword)).length;
        }
        // 빈문자열일때는 0 반환
        return 0;
    }, [text, keyword]);

    return (
        <>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <br />
            <input
                type="text"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
            />

            <hr />
            {/* 찾아야할 단어 + (단어의 빈도수 :) +  단어 몇개 찍히는지..*/}
            "{keyword}" + 단어의 빈도수: {keywordCount}
        </>
    );
}