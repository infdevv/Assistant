import threading

from transformers import AutoTokenizer, AutoModelForCausalLM

def chatbot_response(input_text):
    tokenizer = AutoTokenizer.from_pretrained("satvikag/chatbot")
    model = AutoModelForCausalLM.from_pretrained("satvikag/chatbot")
    
    input_ids = tokenizer.encode(input_text, return_tensors="pt")
    response = model.generate(input_ids, max_length=100)
    response_text = tokenizer.decode(response[0], skip_special_tokens=True)
    
    return response_text

def your_repeating_function():
    # Your code here
    with open("input.txt") as test:
        data = test.read().strip() 
        test.close()
        
    if data == "":
        return
    else:
        response = chatbot_response(data)  
        with open("output.txt", "w+") as test1:
            test1.write(response)
            with open("input.txt", "w+") as test2:
                test2.close()
            test1.close()

def setInterval(interval, function):
    def wrapped():
        setInterval(interval, function)
        function()
    t = threading.Timer(interval, wrapped)
    t.start()
    return t

# Usage example:
interval_seconds = 1
repeating_thread = setInterval(interval_seconds, your_repeating_function)
