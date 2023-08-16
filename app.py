from flask import Flask, render_template,json, request, url_for, redirect, session, jsonify
from pymongo.mongo_client import MongoClient
import bcrypt
#set app as a Flask instance 
app = Flask(__name__)
#encryption relies on secret keys so they could be run
app.secret_key = "canteen123"
#connoct to your Mongo DB database
uri = "mongodb+srv://admin:admin@cluster0.epqxvmj.mongodb.net/"
cart_uri="mongodb+srv://admin:admin@cluster0.epqxvmj.mongodb.net/cart"

# Create a new client and connect to the server
client = MongoClient(uri)
db = client.get_database('total_records')
records = db["records"]
cartclient=MongoClient(cart_uri)
db = cartclient.get_database('cart')
collection = db["cart_details"]
admincollection = db["menu_details"]


# @app.route("/add_to_cart", methods=['POST'])
# def add_to_cart():
#     cart_item = request.get_json()
#     collection.insert_one(cart_item)
#     print(cart_item)
#     return jsonify({'message': 'Item added to cart'})
# MongoDB connection
# cart_uri = "mongodb+srv://admin:admin@cluster0.epqxvmj.mongodb.net"



@app.route("/add_to_cart", methods=['POST'])
def add_to_cart_client():
    try:
        cart_item = request.get_json()
        collection.insert_one(cart_item)
        print(cart_item)
        return jsonify({'message': 'Item added to cart'})
        
    except Exception as e:
        print("Error adding item to cart:", str(e))
        return jsonify({'error': 'Failed to add item to cart'})
    

@app.route("/add_to_menu", methods=['POST'])
def add_to_menu():
    try:
        menu_item = request.get_json()
        print(menu_item)
        admincollection.insert_one(menu_item)
        print(menu_item)
        return jsonify({'message': 'Product added to menu'})
    
    except Exception as e:
        print("Error adding item to cart:", str(e))
        return jsonify({'error': 'Failed to add product to menu'})
    

@app.route("/remove_from_menu", methods=['POST'])
def remove_from_menu():
    try:
        menu_item = request.get_json()
        admincollection.delete_one(menu_item)
        return jsonify({'message': 'Product remove to menu'})
    
    except Exception as e:
        print("Error adding item to cart:", str(e))
        return jsonify({'error': 'Failed to add product to menu'})
    

# @app.route("/add_product", methods=['POST'])
# def add_product():
#     print("Adding product to menu - admin")
#     try:
#         product = request.form['product']
#         category = request.form['category']
#         price = request.form['price']
        
#         # Create a new product document
#         new_product = {
#             'product': product,
#             'category': category,
#             'price': price
#         }
        
#         # Insert the new product into the collection
#         admincollection.insert_one(new_product)
        
#         return jsonify({'message': 'Product added to menu'})
    
#     except Exception as e:
#         print("Error adding product to menu:", str(e))
#         return jsonify({'error': 'Failed to add product to menu'})


@app.route('/client-side.html')
def client_side():
    return render_template('client-side.html')

@app.route("/", methods=["GET", "POST"])
def index():
    if request.method == "POST":
        user = request.form.get("fullname")
        email = request.form.get("email")
        password1 = request.form.get("password")

        email_found = records.find_one({"email": email})
        if email_found:
            message = 'This email already exists in the database'
            print(message)  # Print to the terminal
            return render_template('index.html', msg_sup=message)
        else:
            user_input = {'name': user, 'email': email, 'password': password1}
            records.insert_one(user_input)
            user_data = records.find_one({"email": email})
            new_email = user_data['email']
            message = "New user created"
            print(message)  # Print to the terminal
            return render_template('index.html', email=new_email)

    return render_template('index.html')


# def logout():
#     session.pop("email", None)
#     return render_template("index.html")
    
# def login():
#     message = 'Please login to your account'
#     if "email" in session:
#         return redirect(url_for('client_side'))

#         #check if email exists in database
#         email_found = records.find_one({"email": email})
#         if email_found:
#             email_val = email_found['email']
#             passwordcheck = email_found['password']
#             #encode the password and check if it matches
#             if bcrypt.checkpw(password.encode('utf-8'), passwordcheck):
#                 session["email"] = email_val
#                 return redirect(url_for('client_side'))
#             else:
#                 if "email" in session:
#                     return redirect(url_for("client_side"))
#                 message = 'Wrong password'
#                 return render_template('index.html', message=message)
#         else:
#             message = 'Email not found'
#             return render_template('index.html', message=message)
#     return render_template('client-side.html', message=message)


# def logged_in():
#     if "email" in session:
#         email = session["email"]
#         return render_template('client-side.html', email=email)
#     else:
#         return redirect(url_for("client_side"))


@app.route("/client-side.html", methods=['POST','GET'])
def login():
    message = 'Please log in to your account'

    if request.method == "POST":
        email = request.form.get("email")
        password = request.form.get("password")
        user = records.find_one({"email": email})
        print("User Details : ", user)

        if user:
            if password == user['password']:
                session["email"] = user['email']
                if user['email'] == 'admin@gmail.com':
                    return redirect(url_for('admin'))
                return render_template('client-side.html')
            else:
                message = 'Wrong password'
        else:
            message = 'Email not found'
    print(message)
    return render_template('index.html', msg_lin=message, email = email)


   
@app.route('/menu_fetch')
def menuget():
    documents = admincollection.find()
    items=[]

    for item in documents:
        item['_id'] = str(item['_id'])
        items.append(item)
    print(items)
    return json.dumps(items)


@app.route('/logout')
def logout():
    session.pop("email", None)
    return render_template("index.html")


@app.route('/index.html')
def home():
    return render_template('index.html')

@app.route('/our-vision.html')
def our_vision():
    return render_template('our-vision.html')

@app.route('/admin-side.html')
def admin():
    return render_template('admin-side.html')

# @app.route('/admin')
# def admina():
#     return render_template('admin-side.html')

@app.route('/user-orders.html')
def user_orders():
    return render_template('user-orders.html')

if __name__=="__main__":
    app.run(debug=True)