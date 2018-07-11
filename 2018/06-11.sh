# #363
# I before E except after C
#
# check a given word for the grammar rule: I before E, except after C

grep -cE "cie|(?:^|[^c])ei" < list.txt
