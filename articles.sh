
while IFS=, read -r charpter article
do
    # nohup plop article -- --charpter $charpter --article $article &>/dev/null &
    echo npm run plop article $charpter $article
done < articles.csv
