
//La finalidad de este archivo, es tener las config necesarias para cuando estemos en el modo de produccion
//en el package.json hay que decirle a webpack que bsuque este archivo, ya que por defecto busca el 
//webpack.config.js.




//constantes necesarias
const HtmlWebPackPlugin=  require('html-webpack-plugin');
const MiniCssExtractPlugin= require('mini-css-extract-plugin');
//const {CleanWebpackPlugin}=require('clean-webpack-plugin'); //con esas llaves decimos que solo queremos 
//ela funcion  clean de todo ese paquete.








module.exports={  //se pone asi siempre
    mode:'development',
    output:{
        filename:'main.[hash].js'
    },
    module:{ //dentro del modulo, se define la config del webpack.
        rules:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
               use:[
                'babel-loader'
               ]


            },
            {
                test:/\.css$/,  //esto dice que si encuentra un archivo css haga lo que viene dentro de use.
                exclude: /styles\.css$/,
                use:[ //instrucciones de que hacer con el css se ponen dentro del use:
                    'style-loader',
                    'css-loader'
                ]

            },
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

            //forma global:
            
            //forma individual:
            
        ]

    },
    plugins:[ //aqui es donde creo la instancia de los plugins
        new HtmlWebPackPlugin({
            template: './src/index.html',//esto le dice a webpack, cual archivo tomar
            filename: './index.html' //esto le dice a webpack, donde poner el archivo.
        }),
        new MiniCssExtractPlugin({
            filename:'[name].[hash].css',
            ignoreOrder:false
            
        }),
        //new CleanWebpackPlugin(),
        
    ]


}