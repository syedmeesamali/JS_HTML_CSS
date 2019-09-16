# Hello World Program in Bash Shell


read input

proto="$(echo $input | grep :// | sed -e's,^\(.*://\).*,\1,g')"


url="$(echo ${input/$proto/})"
user="$(echo $url | grep @ | cut -d@ -f1)"
hostport="$(echo ${url/$user@/} | cut -d/ -f1)"
host="$(echo $hostport | sed -e 's,:.*,,g')"
IFS='.'

#Extract the path if any
path="$(echo $url | grep / | cut -d/ -f2-)"
domain="$(echo "$url" | sed -e 's|^/[^/]*//||' -e 's|/.*$||')"

echo "url: $url"
echo "   Protocol: $proto"
echo "   User: $user"
echo "   Host: $host"
echo "   path: $path"
echo "   domain: $domain"
