/*
 * @Author: yongqing
 * @Date:   2019-07-15 17:54:05
 * @Last Modified by:   yongqing
 * @Last Modified time: 2019-07-16 18:38:16
 */

'use strict';

module.exports = app => {
    const {
        STRING,
        INTEGER,
        DATE,
        CHAR,
        BOOLEAN
    } = app.Sequelize;

    const Report = app.model.define('log_error_msg', {
        id: { type: INTEGER, primaryKey: true, autoIncrement: true },
        name: STRING(30),
        type: STRING(30),
        title: STRING(30),
        message: STRING(800),
        script_uri: STRING(30),
        line_no: INTEGER,
        column_no: INTEGER,
        stack: STRING(200),
        resource_url: STRING(30),
        category: STRING(20),
        referrer: STRING(100),
        origin: STRING(100),
        mobile: STRING(50),
        user_agent: STRING(500),
        os: STRING(50),
        version: STRING(50),
        cookies: STRING(800),
        win_with: INTEGER,
        wind_height: INTEGER,
        language: STRING(50),
        cid:STRING(30),
        cip:STRING(30),
        cname:STRING(30),
        time: INTEGER(100),
        env: STRING(50),
        response: STRING(500),
        request: STRING(500),
        created_at: DATE,
        updated_at: DATE,
        status: INTEGER
    }, {
        tableName: 'log_error_msg'
    });

    return Report;
};