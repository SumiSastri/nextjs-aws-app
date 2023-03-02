import { useRouter } from "next/router"

const BackToBlogsHome = () => {
    const router = useRouter()
    return (
        <div>
            <button onClick={() => {
                router.push("/blogs")
            }}>Back to Latest Blogs</button>
        </div>
    );
};
export default BackToBlogsHome;
