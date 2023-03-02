import Link from "next/link";

const BlogsNav = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link href='/blogs'>Latest Blogs</Link>
                </li>
                <li><Link href='/blogs/food-blogs'>Food</Link></li>
                <li>
                    <Link href='/blogs/travel-blogs'>Travel</Link>
                </li>
            </ul>
        </nav>
    );
};
export default BlogsNav;
