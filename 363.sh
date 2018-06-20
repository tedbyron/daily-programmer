# 2018-06-11
# #363
# easy
# bonus 1
# check a given word for the grammar rule: I before E, except after C

grep -cE "cie|(?:^|[^c])ei" < list.txt
