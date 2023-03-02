
export const getStaticProps = async () => {
    const userData = await fetch("https://jsonplaceholder.typicode.com/users")
    const users = await userData.json()
    // console.log(users)
    // getStatic props returns a plain object
    return { props: { users } }
}
// props will be received in build time
const UsersTable = ({ users }: any) => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>User Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Website</th>
                        <th>Company Name</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user: any) => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>{user.website}</td>
                            <td>{user.company.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UsersTable;

