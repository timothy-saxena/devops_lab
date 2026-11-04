values = input("enter number").split()
my_list = []
for value in values:
    my_list.append(float(value))
print(max(my_list))
print(min(my_list))
print(sum(my_list)/len(my_list))