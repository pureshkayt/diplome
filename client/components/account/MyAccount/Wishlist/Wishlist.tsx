import React, { FunctionComponent, useContext } from 'react'

import { ShopContext } from '@providers/ShopProvider'
import { formCart } from '@utils/shop'
import { Grid, Typography, useMediaQuery, useTheme } from '@material-ui/core'
import ProductCard from '@components/shop/components/ProductCard'

const Wishlist: FunctionComponent = () => {
  const { state } = useContext(ShopContext)
  const list = formCart(state.wishlist, state.products)

  const theme = useTheme()
  const isSmallWidth = useMediaQuery(theme.breakpoints.down('xs'))
  return (
    <Grid container direction={'column'} spacing={4} alignItems={'center'}>
      <Grid item>
        <Typography variant="h1">Избранные товары</Typography>
      </Grid>
      <Grid item>
        <Grid
          container
          spacing={2}
          direction={isSmallWidth ? 'column' : 'row'}
          alignItems={isSmallWidth ? 'center' : 'flex-start'}
        >
          {list.length && list.every((x) => x !== undefined) ? (
            list.map((product: any) => (
              <Grid item key={product.id}>
                <ProductCard hit={product} />
              </Grid>
            ))
          ) : (
            <p>Товаров нет</p>
          )}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Wishlist
