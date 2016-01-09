/*
 * Forum Manager class
 */

$(document).render(function () {
     $('#topicContent').ckeditor();
});
+function ($) { "use strict";

    var ForumManager = function () {

        // Init
        this.init()
    }

    ForumManager.prototype.init = function() {
        var self = this

        /*
         * Bind event handlers
         */
        $(document).on('click', '[data-quote-button]', function(){
            self.clickQuoteButton(this)
        })
    }

    //
    // Topic posting
    //

    ForumManager.prototype.formatForumQuote = function(author, quote) {
        quote = "**" + author + "** said:\n\n" + quote
        quote = quote.replace(/^/g, ">")
        quote = quote.replace(/\n/g, "\n>")

        return quote
    }

    ForumManager.prototype.clickQuoteButton = function(el) {
        var self = this,
            $el = $(el)

        $el.request('onQuote', {
            success: function(data) {
                var quoteBody = data.content,
                    authorName = data.author,
                    quoteText = self.formatForumQuote(authorName, quoteBody)

                $('#topicContent.editer').val($('#topicContent.editer').val() + quoteText + '\n\n');
                $('#topicContent').focus();
            }
        })

        return false
    }

    $(document).ready(function(){
        new ForumManager
    })

}(window.jQuery);
