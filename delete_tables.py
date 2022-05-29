import sqlite3
from itertools import chain


class SqliteOpen:
    def __init__(self, db_path) -> None:
        self.db_path = db_path
        self.connection = None
        self.cursor = None

    def __enter__(self):
        self.connection = sqlite3.connect(self.db_path)
        self.cursor = self.connection.cursor()
        return (self.connection, self.cursor)

    def __exit__(self, exc_type, exc_value, exc_traceback):
        self.connection.close()


def main():
    with SqliteOpen(PATH) as s:
        (conn, csr) = s
        query = "select name from sqlite_schema"
        csr.execute(query)
        table_names = tuple(chain.from_iterable(csr.fetchall()))

        # print(table_names)

        for table in table_names:
            q = f"drop table {table}"
            try:
                csr.execute(q)
            except:
                continue

        conn.commit()


if __name__ == "__main__":
    PATH = "website/db.sqlite3"
    main()
