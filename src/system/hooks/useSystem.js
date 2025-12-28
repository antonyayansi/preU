import { storeToRefs } from "pinia";
import { system } from "../store/system";

const useSystem = () => {
    const systemStore = storeToRefs(system());

    return {
        ...systemStore,
        getInfoDevice: system().getInfoDevice
    }
}

export default useSystem;