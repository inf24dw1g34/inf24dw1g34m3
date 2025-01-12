FROM mysql:latest

ENV MYSQL_ROOT_PASSWORD=secret
ENV MYSQL_DATABASE=library
COPY data.sql /docker-entrypoint-initdb.d/
EXPOSE 3306

CMD ["mysqld"]
