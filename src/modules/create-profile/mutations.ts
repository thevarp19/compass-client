import { useMutation } from "@tanstack/react-query";
import { App } from "antd";
import { AxiosError } from "axios";
import { createActor } from "./api";

export const createActorMutation = () => {
    const { message } = App.useApp();

    return useMutation<any, AxiosError<any>, any>({
        async mutationFn(values) {
            const { data } = await createActor(values);
            return data;
        },
        onSuccess() {
            message.success("Success!");
        },
        onError(error) {
            message.error(`${error?.response?.data.message}`);
        },
    });
};
