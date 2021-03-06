// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package com.google.sps.servlets;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/** Servlet that returns some example content. TODO: modify this file to handle comments data */
@WebServlet("/data")
public class DataServlet extends HttpServlet {

  private int pageViews = 0;
  private List<String> message;

  @Override
  public void init() {
    message = new ArrayList<>();
    message.add("{\"Name\": \"Shuhan Dong\", ");
    message.add("\"Age\": \"19\", ");
    message.add("\"Birthday\": \"September 3rd\"}");
  }

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    
    pageViews++;

    String quote = "Hello! Welcome to Shuhan's portfolio!";
    String json = message.get(0);
    json += message.get(1);
    json += message.get(2);

    //response.setContentType("text/html;");
    //response.getWriter().println(quote);
    //response.getWriter().println("This page has been viewed " + pageViews + " times.");
    response.setContentType("application/json;");
    response.getWriter().println(json);
    }
}

