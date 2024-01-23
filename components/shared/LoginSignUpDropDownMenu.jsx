import React from 'react'

const LoginSignUpDropDownMenu = () => {
  return (
    <DropdownMenu>
    <DropdownMenuTrigger>
        <Button>Login/SignUp</Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent style={{  position: 'relative', right: '30px' }}>
        <Tabs defaultValue="account" className="w-[400px]">
            <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="signup">Signup</TabsTrigger>
            </TabsList>
            <TabsContent value="login">
                <h2>hello world</h2>
            </TabsContent>
            <TabsContent value="signup">
                <h2>hello w</h2>
            </TabsContent>
        </Tabs>
    </DropdownMenuContent>
</DropdownMenu>
  )
}

export default LoginSignUpDropDownMenu