import React, {useEffect, useRef, useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import {Alert, Card, FormControl, Snackbar, Stack} from "@mui/material";
import {
    AccountBox,
    AccountBoxSharp,
    AccountCircle,
    BrokenImageSharp, HttpsOutlined,
    LockOutlined,
    PersonOutlineOutlined
} from "@mui/icons-material";
import {getCaptcha, login} from "@/request/api.ts";
import {getRandStr} from "@/utils/strings.ts";
import {LoginPayload} from "@/common/api-response.ts";

const theme = createTheme()

const initialState: LoginPayload = {
    loginName: '',
    password: '',
    code: ''
}


export default function SignIn() {
    const [randomStr, setRandomStr] = useState<string | null>(null);
    const [svgData, setSvgData] = useState<string | null>(null)
    const [loading, setLoading] = useState<boolean>(false)
    const [loginParams, setLoginParams] = useState<LoginPayload>(initialState)
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setLoading(true)
        setRandomStr(getRandStr(4));
        getChangeCaptcha(randomStr)
        setLoading(false)
    }, [])

    const changeCaptcha = () => {
        setLoading(true)
        setRandomStr(getRandStr(4));
        getChangeCaptcha(randomStr)
        setLoading(false)
    }

    const getChangeCaptcha = (code: string) => {
        getCaptcha(code, {responseType: 'text'}).then(res => {
            if (res.headers['content-type'] === 'image/svg+xml') {
                setSvgData(res.data)
            }
        })
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        setLoginParams({
            ...loginParams,
            [name]: value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (randomStr !== loginParams.code){
            setError("验证码输入错误，请重新输入。")
            return;
        }
        const password = loginParams.password;
        login({...loginParams, password: btoa(password)}).then(res => {
            console.log(res.data, 'res')
        })
    }


    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs"
                       sx={{display: "flex", height: "100vh", justifyContent: 'center', alignItems: 'center'}}>
                <CssBaseline/>
                <Card elevation={3} sx={{padding: 3, width: "100%", borderRadius: 5}}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Avatar sx={{m: 1, bgcolor: 'primary.main'}}>
                            <AccountCircle/>
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            登录
                        </Typography>
                        <Box component="form" sx={{mt: 1}}>
                            <FormControl fullWidth>
                                <TextField
                                    InputProps={{
                                        startAdornment: (
                                            <PersonOutlineOutlined/>
                                        )
                                    }}
                                    margin="normal"
                                    required
                                    InputLabelProps={{required: false}}
                                    fullWidth
                                    id="username"
                                    label="用户名"
                                    placeholder="用户名"
                                    name="loginName"
                                    autoComplete="loginName"
                                    value={loginParams.loginName}
                                    onChange={handleInputChange}
                                />
                            </FormControl>
                            <FormControl fullWidth>
                                <TextField
                                    margin="normal"
                                    required
                                    InputLabelProps={{
                                        required: false
                                    }}
                                    InputProps={{      startAdornment: (
                                            <HttpsOutlined/>
                                        ),}}
                                    fullWidth
                                    name="password"
                                    label="密码"
                                    type="password"
                                    id="password"
                                    autoComplete="password"
                                    value={loginParams.password}
                                    onChange={handleInputChange}
                                />
                            </FormControl>
                            <FormControl fullWidth>
                                <Stack spacing={1} direction="row">
                                    <TextField
                                        margin="normal"
                                        required
                                        sx={{width: '100%'}}
                                        InputLabelProps={{required: false}}
                                        name="code"
                                        label="验证码"
                                        id="code"
                                        value={loginParams.code}
                                        onChange={handleInputChange}
                                        autoComplete="captcha"
                                    />
                                    {
                                        svgData ? <Box component="div"
                                                       dangerouslySetInnerHTML={{__html: svgData}}
                                                       onClick={changeCaptcha}
                                                       sx={{
                                                           width: '100%',
                                                           textAlign: 'center',
                                                           justifyContent: "center",
                                                           height: '100%',
                                                           p: '1px'
                                                       }}

                                        >
                                        </Box> : <BrokenImageSharp sx={{width: '100%'}}/>

                                    }
                                </Stack>

                            </FormControl>
                            <FormControl fullWidth>
                                {
                                    error &&        <Snackbar
                                        open={error != null}
                                        autoHideDuration={3000}  // 自动关闭时间，单位为毫秒
                                    >
                                        <Alert severity="success" sx={{ width: '100%' }}>
                                            This is a success message!
                                        </Alert>
                                    </Snackbar>
                                }
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    onClick={e => handleSubmit(e)}
                                    sx={{
                                        mt: 4,
                                        "&:hover": {
                                            transition: "ease-in 0.2s",
                                            transform: "scale(1.1)",
                                        },
                                    }}>
                                    登录
                                </Button>
                            </FormControl>

                        </Box>
                    </Box>
                </Card>
            </Container>
        </ThemeProvider>
    );
}
