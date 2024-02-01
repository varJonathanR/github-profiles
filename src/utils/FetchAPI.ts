import { Dispatch, SetStateAction } from "react";

type SetState = Dispatch<SetStateAction<any>>
type SetLoading = Dispatch<SetStateAction<boolean>>
type SetNotFound = Dispatch<SetStateAction<boolean>>

export function FetchAPI(API_URL: string, SetState: SetState, SetLoading: SetLoading, SetNotFound: SetNotFound) {
    SetLoading(true);
    fetch(API_URL)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to fetch: ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => SetState(data))
        .catch(() => SetNotFound(true))
        .finally(() => SetLoading(false));
}