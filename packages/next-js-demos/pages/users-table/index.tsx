
export const getStaticProps = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const userData = await response.json()
    // console.log(userData)
    // getStatic props returns a plain object
    return { props: { users: userData } }
}

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

