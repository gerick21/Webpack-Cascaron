//el html loader y html plugin hacen que el html se mueva a la carpeta dist para pdroduccion, y no solo el archivo .js
//webpack dev server permite pasar de file a host, ademas de automaticamnete actualizar cambios

//este archivo esta disenado para la version de desarrollo del proyecto, para la version de produccion, es el
//archivo webpack.prod.js


//constantes necesarias
const HtmlWebPackPlugin=  require('html-webpack-plugin');
const MiniCssExtractPlugin= require('mini-css-extract-plugin');









module.exports={  //se pone asi siempre
    mode:'development',
    module:{ //dentro del modulo, se define la config del webpack.
        rules:[
            //forma individual:
            {
                test:/\.css$/,  //esto dice que si encuentra un archivo css haga lo que viene dentro de use.
                exclude: /styles\.css$/,
                use:[ //instrucciones de que hacer con el css se ponen dentro del use:
                    'style-loader',
                    'css-loader'
                ]

            },
            //forma global:
            
            {
                test:/styles\.css$/,  //esto dice que si encuentra un archivo css haga lo que viene dentro de use.
                use:[ //instrucciones de que hacer con el html se ponen dentro del use:
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]

            },
            
            {
                test:/\.html$/, //esto dice que si encuentra un archivo html haga lo que viene dentro de use.
                use:[ //instrucciones de que hacer con el html se ponen dentro del use:
                    {
                        loader:'html-loader', 
                        options:{minimize:false} //con ese true, decimos que al generse el dist, minimize el codigo html. y lo deje listo para produccion.
                    }
                ]

            },
            {
                test:/\.(png|svg|jpg)$/,
                use:
                {
                    loader:'file-loader',
                    options:{
                        esModule:false
                    }

                }
            }

            
            
            
        ]

    },
    plugins:[ //aqui es donde creo la instancia de los plugins
        new HtmlWebPackPlugin({
            template: './src/index.html',//esto le dice a webpack, cual archivo tomar
            filename: './index.html' //esto le dice a webpack, donde poner el archivo.
        }),
        new MiniCssExtractPlugin({
            filename:'[name].css',
            ignoreOrder:false
            
        }),
        
    ]


}