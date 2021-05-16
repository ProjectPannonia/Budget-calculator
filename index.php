<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <title>Document</title>
</head>
<body>
    <div class="wrapper">
        <h1 class="medium_purple_bg pale_white">Expense calculator</h1>
        <div id = "boxes">
            <div id="megnevezes" class="big_box small_border_radius">


                <div class="title medium_purple_bg pale_white"><h2>Item name</h2></div>
                <div class="myList"><ol id="item_name_list"></ol></div>
                <div class="sum medium_purple_bg">
                    <h2>Total</h2>
                    <h2 id="sum_number_of_items"></h2>
                </div>


            </div>
            <!---->
            <div id="quantity" class="small_box big_box small_border_radius">


                <div class="title medium_purple_bg pale_white"><h2>Quantity</h2></div>
                <div class="myList"><ol id="quantity_list"></ol></div>
                <div class="sum medium_purple_bg">
                    <h2>Total</h2>
                    <h2 id="sum_number_of_quantity"></h2>
                </div>


            </div>
            <!---->
            <div id="koltseg" class="big_box small_border_radius">


                <div class="title medium_purple_bg pale_white"><h2>Value</h2></div>
                <div class="myList"><ol id="value_list"></ol></div>
                <div class="sum medium_purple_bg">
                    <h2>Total</h2>
                    <h2 id="sum_of_items_cost"></h2>
                </div>


            </div>
            <div id="kezelofelulet" class="big_box small_border_radius">


                <div class="title medium_purple_bg pale_white"><h2>User interface</h2></div>
                <div class="myList">
                    <ul>
                        <li>
                            <h3>Item name</h3>
                            <input id="item_name" type="text">
                        </li>
                        <li>
                            <h3>Item price</h3>
                            <input id="item_price" type="number">
                        </li>
                        <li>
                            <h3>Item quantity</h3>
                            <input id="item_quantity" type="number">
                        </li>
                        <li>
                            <input id="save_btn" class="my_button" value="Mentés" type="button" onclick="save(this.id)">
                        </li>
                        <li>
                            <input id="save_to_file" class="my_button" value="Save to file" type="button" onclick="saveToFile(this.id)">
                        </li>
                    </ul>
                </div>


            </div>
        </div>
        <div class="footer medium_purple_bg pale_white">
            <h2>Author: Adam Letenyei</h2>
        </div>
    </div>
    <script type="text/javascript" src="js/script.js"></script>
    <script type="text/javascript" src="js/FileSaver.js"></script>
</body>
</html>