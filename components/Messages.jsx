import { useEffect } from "react";
import { supabase } from "../supabaseClient";

const callSupabase = async () => {
    const data = await supabase.from("messages").select("*");
    console.log(data);
};

const Messages = () => {
    useEffect(() => {
        callSupabase();
    }, []);

    return (
        <section>
            messages
        </section>
    );
};

export default Messages;
