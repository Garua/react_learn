

import {memo} from 'react';
import {AppBar, Avatar, Badge, Box, InputBase, styled, Toolbar, Typography} from "@mui/material";
import {Mail, Notifications, Pets} from "@mui/icons-material";

const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent:'space-between'

})

const Search = styled("div")(({theme}) => ({
    backgroundColor:"white",
    padding:"0 10px",
    borderRadius:theme.shape.borderRadius,
    width: "40%",
}))
const Icons = styled("div")(({theme}) => ({
    display:"none",
    gap:"20px",
    alignItems:"center",
    [theme.breakpoints.up("sm")]:{
        display:"flex"
    }
    // backgroundColor:"white",
    // padding:"0 10px",
    // borderRadius:theme.shape.borderRadius,
    // width: "40%",
}))

const UserBox = styled(Box)(({theme}) =>({
    display:"flex",
    alignItems:"center",
    gap:"10px",
    [theme.breakpoints.up("sm")]:{
        display:"none"
    }
}));

const NavBar = memo(() => {
 return (
  <AppBar position="sticky">
      <StyledToolbar>
          <Typography variant="h6" sx={{display:{xs:"none",sm:"block"}}}>
              Hello World
          </Typography>
          <Pets sx={{display:{sx:"block",sm:"none"}}}/>
          <Search>
              <InputBase placeholder="search....."/>
          </Search>
          <Icons>
              <Badge badgeContent={4} color="error">
                  <Mail/>
              </Badge>

              <Badge badgeContent={4} color="error">
                  <Notifications/>
              </Badge>
              <Avatar sx={{width:30,height:30}} src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAMAAzAMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAADBAIFBgEAB//EADoQAAIBAwMCBQMCBAUCBwAAAAECAwAEEQUSITFBBhMiUWEUMnFCkRUjgcEHUnKhsRZVFzNEYoKS4f/EABkBAAMBAQEAAAAAAAAAAAAAAAIDBAEABf/EACMRAAMAAgIBBQEBAQAAAAAAAAABAgMRITESBBMUQVEiYUL/2gAMAwEAAhEDEQA/ANa9vNbMkmxnR16nn96i0hG4pHtY1Y6ZqC3lqgQsrgdDVdrNnJKSwlP/AMeK894lT7PSS2I3EDMocqMnuaptRtXdWLTBPgDAoGopdw4KvKQO2TWfma9nmPqdcdmb/eqVxKQrJaS0V98ohlwsm8sehqWhaTNdatHLcEfTx+sqB1PYUC9sQx3CctKvxWs8O2JsdMAlJMsnqbnp7V3BJ2yzkJoRPFSNBc4o0EQdsmo5r2a9Ro48a5Xia4TXGaIk1wGvE1wdaxnIKtHSgL2oy1PYSDpRR1oKf8U4tpclQwt5SCMjCmpqlvoIHU1p9NB1R40dbRyrDOa9No2oW8TyzWzIijJY9Kz2610aqQmKkDU0t52AZYZCp6EKeabi0fUJUV47WQqRkGlOKf0FtCXWpgcU6+j6hGhd7ZwoGST7UkPmlVDns5M9UhXK6KSwiehatIVVXjwMfclPahrhRNtva+rH3MOtd0JbC6hUrH5cvQ/NWc1pbKMb0BHvXstj1prs+f3k2o3TlnjfGeABSb6bdtljAwJHU1s9T1G3slbYY3I9jWN1TWr27Vtj7B2C0SYnJMfbFraxf6xY5RGSeTjsKvHYEnb0HAqq0C0eJJLqZmMkrcZ7CrJ6NE7SXRAmgucmpvQqNGHsV6l7m8it3SMnLHk07AkV1GfJkAlH6G70LzTL0xk4qpbQu5qFSfIbBGCOtQpq5WwGtcHq6Otcro60LMCr2oy0EdOuKPAnmfaenepctKUMiXXQTsa+pWsrhbOHI8t7MsRjuAK+XY4NfT7WNz9HKFOxbMgnHHQUWB7FZOGGtlZhaFRkeWnO7pyc8Ulq6PHpF/5oPKLgl85OTnij2YSFomk+iBXGX8zn80tq8Cy2lyENkuUPqDncKqfQvYXSJXSz0mMEbZEbfkdcDIo8Su8MHl5KjOcNjB3e1L6VG7W2jusbFER9zY4HFEtkjRkbFnw2SS+GHPWsS4NfZK/DrbX2/IUxt6i3XnjisED3/vW71CNZluMGzO9SQ3merFYTHJqD130Nwnc1IVEVIV5jHiGja8dMtynpIPxQrzxDcXTEwgAd81VIsbjrS96ZbdcxuAOwJ/tXsKOBKyMjdrNKWke42Dqcml7aREKrbpveVgOe9VF0JwjM0krCTqR0q78K6VfRahJLegmJFHlZ6MSOorVpAN7ZpMBECD9PFCcmnI7WWWUIEOcdKNFpb/UFJDkDp85rfdhds1FM5OaiKsm0uTcT234B9+aXe0kDugTOzqR2FEs0P7OZm9egLTxOOjDGfbFS0q5dCMk5Wrm809pbdldc4G4N7UhZWQBy/Gakz6b2iz09cFnNE0wEoAJIyaillK/TAo8PpGKMCAPvFT/MyytIofpop7FxpcrD70zUW024XoAfxTqvGMbZQTTKI4Oc5GKB+vy/aC+HjZQXcFyqBFifBPJAzUrSUom0Dk8YrSo3HB5989KVurNZf5sIG9euO9D8h5a5D9lYofiIIPf2/wB6vZPEV7JHDGHMKRqFPln7h81SDv8APWpirVbjo8mltmtbxJZtKU8txB9OI09PIavT6/ZTpMpiciWAK3p/WO9ZT571IUb9TQPtouP47eLawW0UnlLF0KdSPmrSLXrVZIU2FolgYPkcljWXWu9etK+RaYXtpmpGvWexA8bHMJR+OvtWc9OfTnHzQhUugzSsuZ5OwonxJmvAmlpbgIOTSTX/ADwW/oaV7dPlBbKhA4+z001Z6X9YfW3JbnNctJUGHfaWHOM9aLd6uC/l2cbbsYwo716FZPwmLmG0s7K3kVykiH745Pcdx7VKTV7SGzjS12gRsPSw6D2rGzR6lcuElZUHXdnNRezkw3mXcY6VP7N09szb+jXyeIoz64wInjXqKUuteAUSq5D5DEfNZWRLOIAzXrN22qaE95pqnLPNIR05rvi/pu2a2XXk2GMyA5GVPcc1G31lCHZ3wsnpJrHnWdPXpaEn5arLR5odTDOlmscaHht2cn8V3xtcmzLp6NBe3zTL5cRzHnOfcdqXQV0Lt+2jDbs6c1yn6PTxwoWgG5txo8ViLvElx/5Y6CuQxedNtHTPNW0cYRAvYU/F6eW9szJk0tHIkij+xFwKeiuVK7doGKVK4oMjlBkfinZMMVPQqLrfI3B5bykMMgnpT30tvICLcGKQdOeDVZY5fzWHXbxTcSTqu/bkfipV6eNDbyvYlfWu3MoUAn7wKSAq/OJVBbkNwap7mEwysh7dKXpzwJyz/wBIFXRXKlXCTwNTU0PIFQaVFOTxQ+Jq4GC+wZpS4v8AYOmaWuLxRnGTVdNOznnpTYw77MdBp76V88cUErM3IeNc9mODS7f6sVGaG2Z931DMSOfQeKdS8VwKdEZkTT4v5sm7/KPeqqbU7hidjlF9lrmtXBlvmB6JlQKr2at0AGe8uG6yk/1peSeQ/dIag70M5NFyaRdyemaCxY+/70cIe4r3ln2okcCtraW7uI4IgTJIdo5r6Vp9lHY2cNtF9qDGe5Pc1QeD7Ha73jpnHoT+9ayMZ9R70Fv6LPT49LZwJivbfii4oiR56A0rorJWEPrJ/epSTMxfLiJE4ZmPWm7KBhuBXrVR4p0XUJ7SRbJCwkyThhxxVWK5JM2+0HS4DLvs7yOdRyyhgTRpnV44mUYDnJrGeFvDut2N88k0UkUZAHrb963ttaouxXICoAOTW5ckpcA4VT7RK1YW9l5nGWbALcCjW+oyzJI1hd29w0QJeBecgexrmv2CanorWlpMiyqdy+rAPuKy/hDwtq2m6g0zQsqtkcsMY2kf3H7UiLnXIzL5KuDaQgToJIwdr4YZoGtWuI0nA5HBq3htlt4ki67V7V6eFZ4Gjb9QxzU9vbGa3PJj/ioswHU1y5YxSMp4YHmkJZ/mtmGyR8cDMkwUHJpGe4yDzS80mT1NAJ+aojFrsBsmzlj8VA1yvU5IEg5280CYwMwKLL059feiueM5pZxHnOB+9T5OwGUlwxaaR2PVjQGYdKJN1JORk55rhtJ0WOSaMokg3IT+oU3RuwQUZzRRgdKgRjIHOO9DZsA1hwwT7YqJcKGJxwtVV1eEMFjJ46mgW7PNcwrI5O6RQR7gmjUcGfZ9Z0uP6fTraPADBAW/1EZP+9WUYAQYpMdAPamIW96Q+z1YWpCirK0KYGRVcSOTUJL8wDggt7ULnYW0jQibZwBwKl9WnO/aB/vWWbUbh/ub9qC1w7Hlj+9Z7DYV5Ja1otNZ1dYTsh2jJ60vaX649ZJNU93E06kdT2qtee9tiBs3IOuBVWPFKWmSW2nwbtL2LAIA/oaNFqapjB7+9YJNTJXjcKPaz3N5KI4AwOeWI4FdkxSlwLWSm9H0U3TTqpil2KRT9s6mNV8zc47msp9Z9LEi46DFMW14ZCHVsGoax0Xb4SB+LYBBd+aowJRu/qKzLuW71rPEsguNHjmblkkCn9qxm6qMC42Q5lqiecjmo4rgNdByelUdiDyqWYKOp4qflsqAMrbt2OKgc4O0Ekc8Cg/VTvKbdgdkmG5B7UrLTXRmws8R3+VHC6sO2fUaH9NakAukyt3G/NEkvnjeIxSgT7vTJjOB8/tXrl7u+nacbUJ4IC4yfeo6dNgMy7RS3kkdssS+Y5C5I6ZrTX2jXWpan9Partht41jLMeBgdPzSnhGAzX31E+3bFufDLytW1r4haOCfEKBZJyQzNgjoKu01IeCNvkE2k6DBbEHbK44Db+S3z7VS32gRy231FophXcAd3PHx71aSaqYbaSBbOEgghfXkDPf5pf69J7cxP/KOz7QeAR7UnVJ9lbUdaM7H4fuNOn826tfqopAfLeMZH9R2rR6PoenSWYuZLGFZCdyMW5qxtb2OTT44WLpKilcA/dkYotnHMbOKO4VA6DGEoqyU1wdjxLeyUbc+qm1IIpRoSvbHeiRSZOGoCnQy5KxEiqxWLyHdzVm3qjIHTFVS+mRs9RTYBoYC8GuIuZADx+amp4BqFzbm7tpIkcpIR6HH6T2qhJAjSwt2Fca03ckVkLDxdqNlcPa38CSPGdrZ9J4rQW/jOyYHzbWVT8c1qRyWywi0hZ25Rcfir7T9F2IONi46ms6PHmnWse5LWViPdaUfxfqHiEpbWgEETMVKr1I+aCpbN4X0X2srFI6fTjMa9G9zQbQGPvTdzB9PGkHZFApZ3CDAGT7ClPhDBia3l1DTpIoSM+YDhuhwKzN1ZXFoxFxEyHtnp+9buyi+mtkVsBjy3zmmJUhuojFMquh7Go1mcP8AwHJgV8nzbsD2NerRa14ee2zPbBnh6lepWqSK1klbCggDqSKsx5JpbIrxtPQE6jJZLhYy4745pgahJLHvktHAYYB29qtbTTIocMwDN804Y/il5M+uEYoM9BeQR5C6buPA5WrOHUHCDbpxA+Fp7ZXcfFIef/AvAxnh23aHw1LcLv8ANunwCeu0VGzt1DulyhK49ulbGC1htrOG28oFY1A5pee2h5MabT+a9Tw40ZjWmjFXMcEbOiEKD71XSQq/oicsx4Cjk1sLnR0mYkuAf9NQ0/R4bSbziRJIPtJH2/8A7U1pz2PUqmB8P6MbNDLcNumbB5/SPar9VUUIe9EH4P8ASp97Y9LR2RFYc9aSliMbZU062Nuec/NCA3H1CiQRCCb9LUrqEflt5idO9GuYZI/5qChi4SWNopOvf4pkvQqgcEwYYNMI2OlVLE20nUlfzTUU+4U6aMQLX/D8WsYubd0hvV/VjiT4NUlt4f1mWR4jYgMndnADfj3rURzYOc807bak8B3I+D80zaNXDM7B4G1W7i3vCFAP27q12heHLbw3GJrplkuewU5qDeJbsLt88gH2FVtxqbysWZiWPcmgqmb2+SzvbwFmLHknpTOg2TXtx58iny4zx8mqbTLSbU7gDBCA8kV9L06xWztRHGAMD2qa6+jarRSXw2sdxPApWCYHhetWmrQnb7Z61m/PWGbbnmo6W2OjlbNHGwZBnn81WXunKp8yBABnJWp2t0HQU8j71+KDmTLjyRRAdsYNdxTt7a7W8yPoe1KEAnii3sjqWmc2g17ZRFFSxXaMEpGpdzijSUnM3O0V7t0pWwYnyZB2y2K8BXBwakDXm3Tt7ZXMpHOnfFTWTZznNCkbFQ3ZodaCGWcHndiuL03cmlsjPIJ/FSDODgZx7GiMHY+aWu9LjuPWh2P/AJlots5LcjFOIR706WhVGZuLG8h4cLKnfHBqtkLREn1Jjs1bwqrDkUCWyilByqn4xTPH8F+Ril1FV4Lr+9eOpK3AatRJoNpIcmFc/ii2vg+ORhthCj3Irmmlydsyizl+QC1XOk6RdX0gxGVTu79vxWv07wla2xBfDEHp2rRwWcMSgIoA9hSLr8DTEdC0pLONVxux1PvV9jCnFDiAU8dKM3IpQq6dMqtSi3xP+KwOo/yrjb819Gux6W/FfNddkxqLr/lpP/RVhfAzZ3LLgVbxXIAXNZKK52nPtTP8R2rz+w61rnY7Zr0uUYbT0PBpOeIJKdv2npVRZvezYZY2C56kVd4Z4RvHqFIf8sC58kAFdrw6fNdAoyMrJmCqST0pDfubJo077lYD3oAr0vUVyNwrjZ5mxyKC04Bwc/tR8E1CRRjDVMOAGYUMzY5BodxA+CYjz7VXPdeUSJQAe9bvg7ot1uFHJ5NEW4DNkGqaG6STkYp2HJPFDs7ZaxyY5FMRymq1GYHBpiNmzRzYLWy1jlz0puCEzEdqq4W/4q1s5QqgA80TzaBcFtaWkagFgDVpEUChQoFVNvPnAzTaSE4xS3mbM8B8YNTAFJBye9EV/wD3YrFQLkcBx+K75nzS2fds10HnArGwPElOdynHJr5R4z3waxIozhwCPkV9WyMP8cVhP8QbLm2u16j0H8dR/vmlrXlsbj/DMabavcuPNYhM1rdOsbeBRtjGf8x5NUOksAQuOa00DegA4rMlFMrgbX7emK4xHNcVhjrQpHqZvkJ9EP1GpioCp0/6PPrspZ7djapImDlckd6SFRXUBhFjfr156V5GG4kHIosWar4o3BkT4CjrXHGTmvAipdqfopAPHnHye1aj/wAPtBvrVGn1JkZ1BOHAIrNSj0ZHaq28W4ncRxea0jHCqp5NFiaXDQrLLfTNvZf4YaCjbLfV55GPQeYpP/FP/wDQWkwPtbUpEYYyGYZFN/4d+FToVo11euXvroBmyc7BjoKpNW8Manqsl9qaXO9vNOyIH9I/vVNKdb0RKq8tbBeJdAtNJskms7wzyM23BINN+HNGtbvQbu6uYN08W7aeR2rM2Nu/8Qt4JGbd5oUo3Y5r63hLdLvy41AREJAHB49qDHKrnWhmS3C72Y7RPDMt5FFcSsixh8MjjBFXWoeFo3lU2LRwoB/m6mrW4FqLG7aQkQFwzeX1HFRuvoVSxErzhcjysd/zTfakS817MvdW0mnT+RKwcgA5FWWi2aXkcztKVVOcgZpPxe+zWMYzlFz+asPCkqRQT75EiLYxvPekTjXuaKat+0nsOLSwH/rm/wDpRYdPtptwgu2baMn0UwZJf+4Wn9UFFhuBGr+feWz5XjYADVDxz+Eiy1+lMrZQHOaatrbzreWUk5B2pg9WqvjjMgWOLlmAAGetXl1ZuLWC1gYL6uTnGfmp8WP+nsoy5NStAINOnZ1SdNqdWIPX2qs1/wAP3OpWUtssa8tmMsener820sUCwxOzFj/MkZucfFRjtZV823dmMLHMb78stNeGWtaJ1mpPZ8qn0e40W/W3uyhdk3DbTyPyPajeJ9MurDU45bm9Fyj8Jk+pR+KRR6871Eqa0evgp1G2O+YFXOaGZMmk5ZsdTXI5serPXgfNSsPJSmSzU4ODRqShdiFBHOMj5FMF1HBamK0Q+Wz51cxrGcxSV621JbSRI7ptok4Dds1pWsLQ9VU0rc6Pp1wNssKsPkVmLPCrkkiHNbRJHGQR0oyvSrwC2i2wyBkUY255AqCXAIyDx0quciro9GL8iwXazBWYKp6se1beztdC8LWC6leTRzSldyt3J+K+fCUMOtKapI0sQy5ZRwATnFNm1PJ2SHfB9L8GeI5/EetXcrLshjjxGnsDVLb69Nouv3gBZoHuGLpnI69RRP8ACjak90AMZjFUetMg1W9B5zM3/NOq/wCUyaMK83LNR4tfSxDaa1Y3CR3THcqhc7qsdA1KXVPDmpXU7Zl2kZHwK+bFowoDHIHQHtW+8GFP+k9RVWUZ3YrMd7rg7Lj8I12L+EPEE8rQ6VFaiTLZd3OcD3Nbe9ldDD5SxPucIcrnb81lNLj0zwlo7XrSpNdSrlSDy1WujXv8R0O2liuoUnYlm3kcZ60+X+k+Rbe0il8R3EkeqW93KFaJ/tYD7sVd6RqI1ISFLOFUjGS7Dj8Uh4pWE6bbxXF5E8zS43KRtX+lO/WWOgWUFrCyys3LkdxS+q2G2qjWhnSb6HUHnVbOIeWM+kda75t5/wBoj498VHSf4akk09ndRqJlxtZgNpoX016RxrEX43UzfG9ifHTFbu9eSVGSFIWjPRabvpWGkWbM7bz+rPNVmoobJ1Vpkmdxn009qLKNEs84ODyM80qb5Y+4TS0Wtz5IvYDIkzSbRtKfaOe9SQQ/xOTCTeaRyx+zpVHa6zdNcxK8oEZIBGOMVb3X1bylra8gWFhwGPNMjJNIVeOofJ8zul/iGvXsc1226B9qoT0Ga6YvIJVjkdsU5/iNFp1m9kLQxC/ckyvGfUR8/wBaoLa7cxL5mQSPST+qvL9VLV8s9T01rwA3l4iTeWWG49qWbU4zdxqMER5IGcUreaTd3MxlD4JOfsPFLx6FdrIW3gk88qaT/DXZB6nJlutLovI9ZBTGfUvpHPanvqwACxXnnlsVmbbTpYi5lcHqaeiJVMNyRSmpkVjqkuT/2Q=="/>
          </Icons>

          <UserBox>
              <Avatar sx={{width:30,height:30}} src="data:image/jpeg;base64,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"/>
                <Typography variant="span">Tom</Typography>
          </UserBox>
      </StyledToolbar>
  </AppBar>
 );
});

export default NavBar;