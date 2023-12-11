import { useForm } from "react-hook-form"

export default function HookFormT() {
    const {
        register,
        handleSubmit,
        formState: {errors},
        watch,
    } = useForm();

    const onValid = (data) => {
        console.log("성공이다 바.", data);
    };
    const onInvalid = (err) => {
        console.log("실패했네 낄낄~~", err);
    };


    return(
        <>
            <h3>HookForm 테스트</h3>
            <form onSubmit={handleSubmit(onValid, onInvalid)}>
                <input type="text"
                        placeholder="이름"
                        {...register("idcard", {
                            required: "이름은 필수 항목입니다."
                        })}
                />
                {errors.idcard?.message}
                <br />
                <input type="text"
                        placeholder="나이"
                        {...register("age", {
                            required: "나이는 0이상의 숫자만 입력가능합니다..",
                            min: {value: 1, message: "1이상의 숫자만 입력 가능"}

                        })}
                />
                {errors.age?.message}
                <button type="submit">제출</button>
            </form>
        </>
    )
}