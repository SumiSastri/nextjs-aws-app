`getStaticProps` is a method that returns a plain object. The first key is a prop and the value is another object

The data which is assigned to this object can be used as props in a component to recieve and render that data in the ui (user interface) of the component.

See _UsersTable_ component

The method runs server side and the code does not get bundled into the code that is sent to the browser when rendered.

As it is server side code, other server-side-code can be written here - querying Dbs etc. or querying the fs module in node.

It can not be used in a component file - only in a pages file as the code is not written client side.

```
export const getStaticProps = async () => {
    return { props: { data: users } }
}
```

The code runs in build time - and it runs on every request.
